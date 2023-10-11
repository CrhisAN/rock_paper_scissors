export function shouldBuyFidelity(numberOfTimesGoingToCinema: number): boolean {
  const percentageDiscount = 0.75;
  const ticketPrice = 12;
  const normalCinemaTicket = ticketPrice * numberOfTimesGoingToCinema;
  const fidelityCardPrice = 250;

  const fidelityCard = Array.from({ length: numberOfTimesGoingToCinema }, (_, i) => {
    return ticketPrice * percentageDiscount ** (i + 1);
  }).reduce((accumulator, currentValue) => accumulator + currentValue!, 0) + fidelityCardPrice;

  return fidelityCard < normalCinemaTicket;
}