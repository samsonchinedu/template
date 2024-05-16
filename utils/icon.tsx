import { category } from "@/public/AdminImage/category";
import { shoppingCart } from "@/public/AdminImage/shoppingCart";
import { home } from "@/public/AdminImage/home";
import { people } from "@/public/AdminImage/people";
import { emptyWallet } from "@/public/AdminImage/emptyWallet";
import { receipt } from "@/public/AdminImage/receipt";
import { folderOpen } from "@/public/AdminImage/folderOpen";


export type IconType =
| "category"
| "shoppingCart"
| "home"
| "people"
| "emptyWallet"
| "receipt"
| "folderOpen"

export const icons: Record<IconType, string> = {
    category: category,
    shoppingCart: shoppingCart,
    home: home,
    people: people,
    emptyWallet: emptyWallet,
    receipt: receipt,
    folderOpen: folderOpen,
}