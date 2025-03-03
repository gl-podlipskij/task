import {defineStore} from "pinia";
import type {ProductType} from "../../types/shoper/product.ts";
import api from "../../api";

export const CART = "cart";

export type CartItemType = {
    product: ProductType;
    count : number;
}
export type CartStoreType = {
    items : CartItemType[];
    loading  : 'non-started' | 'idle' | 'success' | 'error',
}

export type SavedCartItem = {
    id : number;
    count : number;
}
const parseCart = (cart:string):SavedCartItem[]=>{
    return JSON.parse(cart) as SavedCartItem[];
}

const useCartStore = defineStore("cart", {
    state : ():CartStoreType=>{
      return {
          items : [],
          loading  : 'non-started',
      }
    },
    getters : {
        productIds(state):string{
            return JSON.stringify(state.items.map(item => {
                return {
                    id : item.product.id,
                    count : item.count,
                }
            }))
        },
        count(state){
            return state.items.length;
        },
        price(state){
            return state.items.map(item=>{
                return item.product.price * item.count;
            }).reduce((sum, current)=>{
               return sum + current;
            });
        }
    },
    actions : {
        async loadAll() {
            const cart = localStorage.getItem(CART);
            if (cart === null) {
                localStorage.setItem(CART, JSON.stringify('[]'));
                this.loading = 'success';
                return;
            }

            const savedItems = parseCart(cart);

            this.loading = 'idle';

            const items:CartItemType[] = [];
            for (const item of savedItems) {
                const response = await api.get<ProductType>(`/products/${item.id}`);
                items.push({
                    count : item.count,
                    product : response.data
                });
            }

            this.items = items;
            this.loading = 'success';

        },
        contains(product:ProductType):boolean{
            return !!this.items.find((p:CartItemType) => product.id === p.product.id);
        },
        addProduct(product:ProductType){
            const contains = !!this.items.find(p => {
                return p.product.id === product.id;
            });
            if (!contains) {
                this.items.push({
                    product, count : 1,
                });
                localStorage.setItem(CART, this.productIds);
            }
        },
        removeProduct(prd:ProductType){
            this.items = this.items.filter((product)=>{
                return product.product.id !== prd.id;
            });
            localStorage.setItem(CART, this.productIds);
        },
        updateCount(product:ProductType, count:number){
            const item = this.items.find(p=>p.product.id === product.id);
            if (!item) {
                return;
            }
            if (count <= 0) {
                return;
            }
            item.count = count;

            localStorage.setItem(CART, this.productIds);
        },
        buy(){
            this.items = [];
            localStorage.setItem(CART, this.productIds);
        },
    }
});

export default useCartStore;