
export const getCurrentWeek = () => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay()); // Set to Sunday
  
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Set to Saturday
  
    const days = [];
    for (let d = startOfWeek; d <= endOfWeek; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
  
    return days;
  };
  