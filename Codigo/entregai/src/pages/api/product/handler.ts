import { deleteProductInStock, registerProductToStock, updateProductInStock } from "@/libs/service/productService"
import { Product } from "@/libs/types/Product"
import { randomUUID } from "crypto"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
    
        const { supermarketId } = req.query

        const { name, price, stockQuantity } = req.body

        try {

            const product: Product = { name, price, stockQuantity, id: randomUUID() }

            await registerProductToStock(supermarketId as string, product)

            return res.status(200).json({})

        } catch (err: any) {

            return res.status(500).json({ message: err.message })
        }
    }

    if (req.method === 'PATCH') {
    
        const { supermarketId, productId } = req.query

        const { name, price, stockQuantity } = req.body

        try {

            const product: Product = { name, price, stockQuantity, id: productId as string }

            await updateProductInStock(supermarketId as string, product)

            return res.status(200).json({})

        } catch (err: any) {

            return res.status(500).json({ message: err.message })
        }
    }

    if (req.method === 'DELETE') {
        
        const { supermarketId, productId } = req.query

        try {

            await deleteProductInStock(supermarketId as string, productId as string)

            return res.status(200).json({})

        } catch (err: any) {

            return res.status(500).json({ message: err.message })
        }
    }
}