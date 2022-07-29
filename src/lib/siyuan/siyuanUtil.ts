/**
 * 获取挂件所在的块ID
 * @returns {Promise<string>}
 */
import {getJSONConf, setJSONConf} from "../config";
import {getBlockByID} from "./siYuanApi.js";
import log from "../logUtil";
import {getEnv} from "../envUtil";

async function getWidgetId() {
    // @ts-ignore
    if (!window.frameElement
        || !window.frameElement.parentElement
        || !window.frameElement.parentElement.parentElement) {
        log.logWarn("正在已非挂件模式运行，部分功能将不可用，请知悉")
        return {
            isInSiyuan: false,
            widgetId: ""
        }
    }

    let self = window.frameElement.parentElement.parentElement;
    if (!self) {
        log.logWarn("正在已非挂件模式运行，部分功能将不可用，请知悉")
        return {
            isInSiyuan: false,
            widgetId: ""
        }
    }

    const widgetId = self.getAttribute('data-node-id')
    if (!widgetId) {
        log.logWarn("正在已非挂件模式运行，部分功能将不可用，请知悉")
        return {
            isInSiyuan: false,
            widgetId: ""
        }
    }

    log.logWarn("恭喜你，正在已挂件模式运行")
    return {
        isInSiyuan: true,
        widgetId: widgetId
    }
}

/**
 * 获取本地缓存的思源笔记页面信息（不是实时的）
 * @param force true代表强制调用查询不获取缓存
 * @returns {Promise<any>}
 */
async function getWidgetPage(force?: boolean) {
    const widgetResult = await getWidgetId()
    if (!widgetResult.isInSiyuan) {
        return
    }

    const widgetId = widgetResult.widgetId
    log.logInfo("获取挂件的widgetId=>", widgetId)
    // 默认读取缓存
    const pageObj = getJSONConf(widgetId);
    if (!force && pageObj) {
        log.logInfo("获取本地缓存的思源笔记页面信息（不是实时的）=>", pageObj)
        return pageObj;
    }

    // 如果本地不存在，或者需要强制读取，调用api查询
    const page = await getBlockByID(widgetId);
    if (page) {
        setJSONConf(widgetId, page)
        log.logInfo("调用API设置查询思源页面信息并更新本地缓存", page)
    }
    return page;
}

/**
 * 获取本地缓存的思源笔记页面ID
 * @param force
 * true 强制调用查询不获取缓存
 * false 优先读取本地缓存，缓存不存在再去查询
 * @returns {Promise<*|string>}
 */
async function getSiyuanPageId(force?: boolean) {
    const page = await getWidgetPage(force);
    if (!page) {
        return
    }

    const pageId = page.root_id
    log.logInfo("获取思源笔记页面ID=>", pageId)
    return pageId
}

/**
 * 获取页面ID，如果不是挂件模式，可以自己提供一个页面ID
 * @param force 是否强制刷新
 * @param pageId 页面ID，可选的（挂件模式无需传递，开发阶段或者非挂件模式可以传递ID模拟运行）
 */
export async function getPageId(force?: boolean, pageId?: string) {
    // 默认尝试读取挂件的ID
    let syPageId = await getSiyuanPageId(force)
    // log.logWarn("syPageId=>", syPageId)
    if (!syPageId) {
        //如果其他地方想使用，也可以显式的传入一个页面ID
        // log.logWarn("pageId=>", pageId)
        if (pageId) {
            syPageId = pageId
        }
        //  开发模式模拟传递一个ID
        if (!pageId && import.meta.env.DEV) {
            // log.logWarn("env=>", getEnv("VITE_SIYUAN_DEV_PAGE_ID"))
            syPageId = getEnv("VITE_SIYUAN_DEV_PAGE_ID")
        }
    }

    log.logWarn("当前页面ID是=>", syPageId)
    return syPageId;
}

/**
 * 获取页面
 * @param pageId 页面ID
 */
export async function getPage(pageId: string) {
    return await getBlockByID(pageId)
}