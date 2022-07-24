import cardapio from './cardapio.json'
import Item from './Item';
import styles from './itens.module.scss';


const Itens = () => {
  return (
    <div className={styles.itens}>{cardapio.map(item => (
        <Item key={item.id} {...item} />
    ))}</div>
  )
}

export default Itens