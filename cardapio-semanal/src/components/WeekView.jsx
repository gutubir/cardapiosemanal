import DayCard from './DayCard';

const daysOfWeek = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
];

function WeekView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {daysOfWeek.map((day) => (
        <DayCard key={day} day={day} />
      ))}
    </div>
  );
}

export default WeekView;