export const name: string = 'invoice';

export const formatDueDate = (date: string, title: string) => {
  const dueDate = new Date(date);
  const dueMonth = dueDate.toLocaleString('default', { month: 'short' });
  const dueDay = dueDate.getDate();
  const dueYear = dueDate.getFullYear();
  return `${title} ${dueDay} ${dueMonth} ${dueYear}`;
};
