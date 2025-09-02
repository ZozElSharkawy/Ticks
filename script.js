function UpdateClock() {
  const now = new Date(); 
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // convert to 12-hour format
  hours = hours.toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}\u00A0${ampm}`;
  document.getElementById('clock').textContent = timeString;

  
 const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
  const dateString = now.toLocaleDateString("en-GB", options);
  document.getElementById('date').textContent = dateString;
}

UpdateClock();
setInterval(UpdateClock, 1000);