import './ScheduleItem.css';

export default function ScheduleItem({ name, company, interval, topic, children }) {
	return <div class='ScheduleItem'>
		<img src={'/people/' + name + '.png'} width="250" />
		<span class='interval'>{interval}</span>
		<span class='name'>{name}</span>
		<span class='company'>{company}</span>
		<span class='topic'>{topic}</span>

		<div class='desc'>{ children }</div>
	</div>;
}
