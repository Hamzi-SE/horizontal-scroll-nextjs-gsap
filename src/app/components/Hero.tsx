import { FC } from 'react'

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
	return (
		<header className='hero__header'>
			<h1>Muhammad Hamza</h1>
			<h2>Full Stack Web Developer</h2>
		</header>
	)
}

export default Hero
