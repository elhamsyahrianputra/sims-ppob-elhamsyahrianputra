import { useEffect, useState } from "react";
import { formatIndoDateTime } from "../../../core/utils/format-date";
import { formatRupiah } from "../../../core/utils/format-rupiah";
import { useHistories } from "../hooks/use-history";
import type { Record } from "../types/history.types";

export default function HistoryPage() {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(5);
  const [allRecords, setAllRecords] = useState<Record[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const { data: histories } = useHistories(offset, limit);

  useEffect(() => {
    if (histories?.data?.records) {
      const records = histories.data.records;

      setAllRecords((prev) => {
        const newRecords = records.filter(
          (record) =>
            !prev.some((p) => p.invoice_number === record.invoice_number),
        );
        return [...prev, ...newRecords];
      });

      if (records.length < limit) {
        setHasMore(false);
      }
    }
  }, [histories, limit]);

  const handleShowMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  return (
    <>
      <div className="mt-16">
        <h4 className="font-semibold text-lg">Semua Transaksi</h4>
      </div>
      <div className="mt-3">
        <ul className="flex flex-col gap-y-6">
          {allRecords.map((record) => (
            <li key={record.invoice_number}>
              <div className="flex justify-between rounded-md border border-gray-300 px-4 py-3">
                <div className="flex flex-col gap-y-1">
                  {record.transaction_type === "TOPUP" ? (
                    <div className="flex gap-x-1 font-semibold text-emerald-400 text-xl">
                      <span>+</span>
                      <span>
                        Rp<span>{formatRupiah(record.total_amount)}</span>
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-x-1 font-semibold text-primary/75 text-xl">
                      <span>-</span>
                      <span>
                        Rp<span>{formatRupiah(record.total_amount)}</span>
                      </span>
                    </div>
                  )}

                  <div className="flex gap-x-4 text-gray-400 text-xs">
                    {(() => {
                      const { date, time } = formatIndoDateTime(
                        record.created_on,
                      );
                      return (
                        <>
                          <span>{date}</span>
                          <span>{time}</span>
                        </>
                      );
                    })()}
                  </div>
                </div>
                <p className="font-medium text-xs">{record.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            className="cursor-pointer font-semibold text-primary/75 transition-opacity duration-300 ease-in-out hover:opacity-65 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={false}
            onClick={handleShowMore}
            type="button"
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}
