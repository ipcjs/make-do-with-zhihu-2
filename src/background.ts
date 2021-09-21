import nav from './nav'

/** 需要`webRequestBlocking`权限 */
function v2() {
    chrome.webRequest.onBeforeSendHeaders.addListener(
        ({ requestHeaders }) => {
            if (requestHeaders) {
                for (let header of requestHeaders) {
                    if (header.name === 'User-Agent' || header.name === 'user-agent') {
                        header.value = nav.userAgent
                        return { requestHeaders }
                    }
                }
            }
            return {}
        },
        { urls: ['<all_urls>'], types: ['main_frame'] },
        ['blocking', 'requestHeaders'],
    )
}

/** 需要`declarativeNetRequest`权限  */
async function v3() {
    const c = chrome.declarativeNetRequest
    await c.updateDynamicRules({
        removeRuleIds: [1],
        addRules: [
            {
                id: 1,
                priority: 1,
                condition: {
                    resourceTypes: [c.ResourceType.MAIN_FRAME],
                    urlFilter: "||zhihu.com"
                },
                action: {
                    type: c.RuleActionType.MODIFY_HEADERS,
                    requestHeaders: [
                        {
                            header: 'user-agent',
                            operation: c.HeaderOperation.SET,
                            value: nav.userAgent,
                        }
                    ],
                }
            }
        ]
    })
}

v2()