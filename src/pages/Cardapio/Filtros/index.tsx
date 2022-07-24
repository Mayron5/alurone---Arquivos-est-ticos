import filtros from './filtros.json';
import styles from './Filtros.module.scss';
type IOpcao = typeof filtros[0];

const Filtros = () => {

	function selecionarFiltro(filtro: IOpcao) {

	}

	return (
		<div className={styles.filtros}>
			{filtros.map((filtro) => (
				<button
					className={styles.filtros__filtro}
					key={filtro.id}
					onClick={() => selecionarFiltro(filtro)}>
					{filtro.label}
				</button>
			))}
		</div>
	)
}

export default Filtros