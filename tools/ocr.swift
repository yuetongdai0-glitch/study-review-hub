import Foundation
import PDFKit
import AppKit
import Vision

let args = CommandLine.arguments
guard args.count >= 3 else { print("usage: input.pdf outdir [dpi]"); exit(2) }
let inPath = args[1]
let outDir = args[2]
let dpi = args.count > 3 ? Double(args[3])! : 110.0

try? FileManager.default.createDirectory(atPath: outDir, withIntermediateDirectories: true)
guard let doc = PDFDocument(url: URL(fileURLWithPath: inPath)) else { print("cannot open pdf"); exit(3) }
let n = doc.pageCount
print("pages=\(n)")
let scale = dpi / 72.0

var ocrAll: [String] = []
for i in 0..<n {
    guard let page = doc.page(at: i) else { continue }
    let rect = page.bounds(for: .mediaBox)
    let w = Int(rect.width * scale), h = Int(rect.height * scale)
    guard let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: 0,
                              space: CGColorSpaceCreateDeviceRGB(),
                              bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue) else { continue }
    ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    ctx.fill(CGRect(x: 0, y: 0, width: w, height: h))
    ctx.scaleBy(x: scale, y: scale)
    ctx.translateBy(x: -rect.origin.x, y: -rect.origin.y)
    page.draw(with: .mediaBox, to: ctx)
    guard let cg = ctx.makeImage() else { continue }
    let req = VNRecognizeTextRequest()
    req.recognitionLanguages = ["zh-Hans", "en-US"]
    req.recognitionLevel = .accurate
    req.usesLanguageCorrection = true
    let handler = VNImageRequestHandler(cgImage: cg, options: [:])
    try? handler.perform([req])
    var txt = ""
    if let obs = req.results {
        for o in obs { if let c = o.topCandidates(1).first { txt += c.string + "\n" } }
    }
    ocrAll.append("=== page \(i+1) ===\n" + txt)
}
try? ocrAll.joined(separator: "\n").write(toFile: outDir + "/ocr.txt", atomically: true, encoding: .utf8)
print("done")
