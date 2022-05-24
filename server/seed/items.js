const db = require('../db')
const { Item, Inventory } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const demoInventory = await Inventory.find({ createdAt: "2022-05-21T20:14:18.795Z" })
    const items = [
        {
            location: 'demo location',
            category: 'demo category',
            item: 'demo item',
            size: 'demo size',
            count: 12,
            inventory_id: demoInventory[0]._id
        }
    ]

    await Item.insertMany(items)
    console.log('Created items with inventories')
}

const run = async () => {
    await main()
    db.close()
}

run()