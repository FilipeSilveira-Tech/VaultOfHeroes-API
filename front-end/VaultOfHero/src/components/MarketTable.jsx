import { itemImages } from "../utils/imageMap";

function MarketTable({ items }) {
  return (
    <div className='market-container'>
      <table className='market-table'>
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Tipo</th>
            <th>Compra</th>
            <th>Venda</th>
            <th>Qtd</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <img src={itemImages[item.type]} className='item-icon' />
              </td>
              <td className='item-name capitalize'>{item.name}</td>
              <td className='item-name capitalize'>{item.type}</td>
              <td className='gold-text'>{item.base_price}g</td>
              <td>{item.sold_value}g</td>
              <td>{item.amount}</td>

              <td>
                <button className='buy-btn'>Comprar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarketTable;