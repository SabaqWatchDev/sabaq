"use client"

interface TableInputProps {
  type: 'text' | 'time' | 'datetime' | 'date' | 'number';
  name: string;
  label?: string;
  readOnly?: boolean;
  defaultValue?: any;
  queryName?: string
}

function TableInput({ type, name, label, readOnly, defaultValue }: TableInputProps) {

  const queryHandler = (term: string) => {
    localStorage.setItem(name, term)
  }

  return (
    <td className="min-w-[100px] tap-highlight-transparent shadow-sm px-3 bg-default-100 hover:bg-default-200 focus:bg-default-100 group-data-focus:bg-default-100 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background h-14 py-2">
      {label && (
        <label className="sr-only" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        readOnly={readOnly}
        onChange={(e) => { queryHandler(e.target.value) }}
        defaultValue={defaultValue}
        className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground"
        type={type}
        name={name}
        id={name}
      />
    </td>
  );
}

export default TableInput;
