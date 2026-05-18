export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const API = "https://script.google.com/macros/s/AKfycby7VXnu6VdFZgT3XK8uHfNk5h8G7vygs9HzqioxrY2Ey4hBhVxGnw5Zfddx1RUNCKKKBQ/exec";
  
  try {
    const response = await fetch(API);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'فشل تحميل البيانات' });
  }
}
