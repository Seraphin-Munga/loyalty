export default interface ISubscribeModel {
    store_code: string,
    line_items: [
        {
            code: string,
            description: string,
            quantity: string,
            price: string
        }
    ],
    order_total: string,
    gross_order_total: string,
    order_reference: string,
    order_date: string
}