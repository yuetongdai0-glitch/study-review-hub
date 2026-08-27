/**
 * 该实体用于描述共享导航中的复习科目及其站内路由。
 */
const studyPages = [
  { route: 'graphic-reasoning', label: '图形推理 3+3 体系' },
  { route: 'comprehensive-d', label: '综应 D 类' },
  { route: 'verbal', label: '言语理解与表达' },
  { route: 'quantitative', label: '数量关系' },
  { route: 'judgment', label: '判断推理知识图谱' },
  { route: 'data-analysis', label: '资料分析' },
  { route: 'comprehensive-a', label: '综应 A 类' }
]

/**
 * 创建带类名与文本的元素，减少导航结构中的重复 DOM 操作。
 * @param {string} tag HTML 标签名。
 * @param {string} className 元素类名。
 * @param {string} textContent 元素文本。
 * @returns {HTMLElement} 创建完成的元素。
 */
function createElement(tag, className, textContent = '') {
  const element = document.createElement(tag)
  element.className = className
  element.textContent = textContent
  return element
}

/**
 * 根据当前 URL 找出正在阅读的科目路由。
 * @returns {string} 当前科目路由；无法识别时返回空字符串。
 */
function getCurrentRoute() {
  const segments = window.location.pathname.split('/').filter(Boolean)
  return studyPages.find(({ route }) => segments.includes(route))?.route ?? ''
}

/**
 * 构建复习页右下角共享导航。
 * @returns {void}
 * @description 导航只追加独立 DOM，不改写原页面节点，避免破坏原页面交互状态。
 */
function mountStudyNavigation() {
  if (document.querySelector('.study-hub-shell')) return

  const currentRoute = getCurrentRoute()
  const shell = createElement('nav', 'study-hub-shell')
  shell.dataset.open = 'false'
  shell.setAttribute('aria-label', '复习资料切换')

  const panel = createElement('div', 'study-hub-panel')
  panel.id = 'study-hub-panel'

  const header = createElement('div', 'study-hub-panel-header')
  header.append(createElement('strong', '', '切换复习科目'))

  const home = createElement('a', 'study-hub-home', '返回总览')
  home.href = '../../index.html'
  header.append(home)
  panel.append(header)

  const links = createElement('ul', 'study-hub-links')
  studyPages.forEach(({ route, label }, index) => {
    const item = document.createElement('li')
    const link = createElement('a', 'study-hub-link')
    link.href = `../${route}/`
    if (route === currentRoute) link.setAttribute('aria-current', 'page')

    const number = createElement('span', 'study-hub-link-index', String(index + 1).padStart(2, '0'))
    const name = createElement('span', 'study-hub-link-name', label)
    const arrow = createElement('span', 'study-hub-link-arrow', '→')
    arrow.setAttribute('aria-hidden', 'true')
    link.append(number, name, arrow)
    item.append(link)
    links.append(item)
  })
  panel.append(links)

  const trigger = createElement('button', 'study-hub-trigger')
  trigger.type = 'button'
  trigger.setAttribute('aria-label', '打开复习资料导航')
  trigger.setAttribute('aria-controls', panel.id)
  trigger.setAttribute('aria-expanded', 'false')
  trigger.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>'

  /**
   * 同步抽屉显隐状态与无障碍属性。
   * @param {boolean} isOpen 是否展开导航。
   * @returns {void}
   */
  const setOpen = (isOpen) => {
    shell.dataset.open = String(isOpen)
    trigger.setAttribute('aria-expanded', String(isOpen))
    trigger.setAttribute('aria-label', isOpen ? '关闭复习资料导航' : '打开复习资料导航')
  }

  trigger.addEventListener('click', () => setOpen(shell.dataset.open !== 'true'))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && shell.dataset.open === 'true') {
      setOpen(false)
      trigger.focus()
    }
  })
  document.addEventListener('pointerdown', (event) => {
    if (shell.dataset.open === 'true' && !shell.contains(event.target)) setOpen(false)
  })

  shell.append(panel, trigger)
  document.body.append(shell)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountStudyNavigation, { once: true })
} else {
  mountStudyNavigation()
}
