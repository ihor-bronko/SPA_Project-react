import React from 'react'
import Header from '../components/Header/Header'

const Home = () => {
	return (
		<>
			<Header />
			<main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>О компании:</h2>
							<p>
								СибирьСтройПроект - динамично-развивающаяся компания работающая
								от Калининграда до Сахалина, специализируется на ремонте фасадов
								и электрики.
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>SIBIR строй Проект</h2>
							<p>
								Среди наших клиентов такие компании как: ГазПром, Гидромедцентр,
								ОАО "РЖД", РосТелеком, администрации крупных городов России.
								Миссия нашей компании - делать больше, чем указано в смете,
								поэтому к нам возвращаются снова. Для проведения работ имеем все
								необходимые допуски: СРО, аккредитации на тендерных площадках, а
								также больше 200 положительных отзывов, наград и грамот,
								собранных за последние 18 лет работы. Стать нашим клиентом или
								присоединиться к нашей дружной команде можно, позвонив в наш
								единый call-центр. Наши двери Открыты Для Вас!
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default Home
