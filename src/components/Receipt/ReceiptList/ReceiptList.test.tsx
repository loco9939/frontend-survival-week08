import { render, screen } from '@testing-library/react';
import ReceiptList from '.';
import fixtures from '../../../../fixtures';

const { order } = fixtures;

function renderReceiptList() {
  render(<ReceiptList orderId={order.id} />);
}

describe('ReceiptList', () => {
  beforeEach(() => {
    renderReceiptList();
  });

  it('renders 주문목록, 총 가격', async () => {
    const title = await screen.findByText(/주문목록/);
    const totalPriceText = await screen.findByText(/총 가격/);

    expect(title).toBeInTheDocument();
    expect(totalPriceText).toBeInTheDocument();
  });
});
