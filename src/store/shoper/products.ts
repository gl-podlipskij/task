import {defineStore} from "pinia";
import type {ProductType} from "../../types/shoper/product.ts";
import api from "../../api";

export type ProductsState = {
    loading : 'non-started' | 'idle' | 'success' | 'error',
    products : ProductType[],
    page : number,
    query: string | undefined,
    total : number | undefined,
}

const useProductsStore = defineStore('products', {
    state : ():ProductsState=>{
        return {
            products : [],
            loading : 'non-started',
            page : 1,
            total : undefined,
            query : undefined,
        }
    },

    actions : {
        async setPage(page:number){
            if (page <= 0) {
                return;
            }
            this.page = page;
            await this.loadProducts();
        },
        async setQuery(query:string){
            this.query = query;
            await this.loadProducts();
        },
        async loadTotal(){
            if (!this.query) {
                const response = await api.get('/product?limit=0');
                this.total = response.data.total;
            } else {
                const response = await api.post(`/products/search/?limit=0&q=${this.query}`);
                this.total = response.data.total;
            }
        },

        async loadProducts(pageSize:number=10){
            const skip = (this.page - 1) * pageSize;
            try {
                this.loading = 'idle';
                await this.loadTotal();

                if (!this.query) {
                    api.get(`/products?limit=${pageSize}&skip=${skip}`).then(r => {
                        this.products = r.data.products as ProductType[];
                        this.loading = 'success';
                    });
                } else {
                    api.get(`/products/search?q=${this.query}&limit=${pageSize}&skip=${skip}`).then(r => {
                        this.products = r.data.products as ProductType[];
                        this.loading = 'success';
                    });
                }
            } catch (error) {
                this.loading = 'error';
            }
        },

    }
});

export default useProductsStore;