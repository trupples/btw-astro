export default function Speaker({ name, profession, children }) {
	return <div class='Speaker'>
		<img src={'/people/' + name + '.png'} width="300" />
		<span class='name'>{name}</span>
		<span class='profession'>{profession}</span>

		{ children }
	</div>;
}
