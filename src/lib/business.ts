export const business = {
  name: 'Sreenivasa Tailors',
  phone: '098444 11898',
  phoneHref: 'tel:+919844411898',
  rating: 4.8,
  reviewCount: 369,
  closingHour: 21,
  address: '172, 18th Cross, 24th Main Road, near Bescom Office, 2nd Sector, HSR Layout, Bengaluru, Karnataka 560102',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sreenivasa+Tailors+HSR+Layout+Bengaluru',
};

export function hoursStatus(date: Date) {
  const hour = Number(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', hourCycle: 'h23' }).format(date));
  return hour >= business.closingHour ? 'Past listed closing time' : 'Call to confirm today’s hours';
}

export const reviews = [
  { name: 'Spandana N', initials: 'SN', detail: 'Google review', quote: 'Absolutely loved the stitching! The fitting is perfect, and every detail is neatly done. The top looks exactly the way I wanted. Highly recommend for quality work and excellent tailoring!' },
  { name: 'Richa Sharma', initials: 'RS', detail: 'Google review · excerpt', quote: 'I have visited this store many times and I have always gotten the desired results. The work is done on the spot and he is very quick also. The charges are also decent.' },
  { name: 'Aman Kumar', initials: 'AK', detail: 'Local Guide · Google review excerpt', quote: 'Excellent tailoring and great service. Really happy with the work.' },
];