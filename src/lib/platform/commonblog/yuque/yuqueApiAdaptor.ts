import {IApi} from "../../../api";
import {CommonblogApiAdaptor} from "../commonblogApiAdaptor";
import {YuqueApi} from "./yuqueApi";
import {API_TYPE_CONSTANTS} from "../../../constants/apiTypeConstants";
import {UserBlog} from "../../../common/userBlog";
import logUtil from "../../../logUtil";
import {Post} from "../../../common/post";
import {CategoryInfo} from "../../../common/categoryInfo";

/**
 * 语雀的API适配器
 */
export class YuqueApiAdaptor extends CommonblogApiAdaptor implements IApi {
    private readonly yuqueApi: YuqueApi

    constructor() {
        super(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
        this.yuqueApi = new YuqueApi(this.cfg.apiUrl, this.cfg.blogid || "", this.cfg.username || "", this.cfg.token || "")
    }

    public async getUsersBlogs(): Promise<Array<UserBlog>> {
        let result: Array<UserBlog> = []

        const repos = await this.yuqueApi.repos()
        logUtil.logInfo("repos=>", repos)

        // 数据适配
        repos.forEach((item: any) => {
            const userblog: UserBlog = new UserBlog()
            userblog.blogid = item.namespace
            userblog.blogName = item.name
            userblog.url = item.namespace
            result.push(userblog)
        })

        return result
    }

    async deletePost(postid: string): Promise<boolean> {
        return await this.yuqueApi.delDoc(postid)
    }

    async editPost(postid: string, post: Post, publish?: boolean): Promise<boolean> {
        return await this.yuqueApi.updateDoc(postid, post.title, post.wp_slug, post.description)
    }

    async newPost(post: Post, publish?: boolean): Promise<string> {
        return await this.yuqueApi.addDoc(post.title, post.wp_slug, post.description)
    }

    async getPost(postid: string, useSlug?: boolean): Promise<Post> {
        const yuqueDoc = await this.yuqueApi.getDoc(postid)
        logUtil.logInfo("yuqueDoc=>", yuqueDoc);

        const commonPost = new Post();
        commonPost.title = yuqueDoc.title
        commonPost.description = yuqueDoc.body

        const book = yuqueDoc.book
        const cats = []
        cats.push(book.name)
        commonPost.categories = cats

        return commonPost;
    }

    async getCategories(): Promise<CategoryInfo[]> {
        const cats = <CategoryInfo[]>[]

        const repos: any[] = await this.yuqueApi.repos();
        logUtil.logInfo("yuque repos=>", repos)
        if (repos && repos.length > 0) {
            repos.forEach((repo) => {
                // 只获取文档库
                if (repo.type == "Book") {
                    const cat = new CategoryInfo();
                    cat.categoryId = repo.slug
                    cat.categoryName = repo.name
                    cat.description = repo.name
                    cat.categoryDescription = repo.name
                    cats.push(cat)
                }
            })
        }

        return cats;
    }
}