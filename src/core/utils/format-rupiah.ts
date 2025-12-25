export const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID").format(amount);
};
