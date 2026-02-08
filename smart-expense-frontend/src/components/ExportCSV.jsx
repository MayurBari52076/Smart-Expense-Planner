export default function ExportCSV({ expenses }) {

  const exportFile = () => {
    const rows = [
      ["Title","Amount","Category","Date"],
      ...expenses.map(e=>[
        e.title,
        e.amount,
        e.category,
        new Date(e.date).toLocaleDateString()
      ])
    ];

    const csv = rows.map(r=>r.join(",")).join("\n");
    const blob = new Blob([csv],{type:"text/csv"});
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";
    a.click();
  };

  return (
    <button onClick={exportFile}>
      Export CSV
    </button>
  );
}
