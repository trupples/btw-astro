import './ContactCard.css';

export interface Props {
	name: string;
	role: string;
	email: string;
	tel: string;
}

export default function ContactCard({ name, role, email, tel } : Props) {
	return <div class='ContactCard'>
		<img src={'people/' + name + '.png'} width='200' />
		<span class='name'>{name}</span>
		<span class='role'>{role}</span>
		<span class='email'><a href={'mailto:' + email}>{email}</a></span>
		<span class='tel'>{tel}</span>
	</div>;
}
