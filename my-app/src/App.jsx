import './App.css'

const itemFull = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}
function ShopItemFunc({items}) {
  console.log('ff', items.brand)
  return (
    <div class="main-content">
      <h2>{items.brand}</h2>
      <h1>{items.title}</h1>
      <h3>{items.description}</h3>
      <div class="description">
        {items.descriptionFull}
      </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{items.currency}{items.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc items={itemFull} />
      </div>
    </div>
  )
}

export default App