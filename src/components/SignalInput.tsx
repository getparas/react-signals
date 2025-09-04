import type { Signal } from "@preact/signals-react";
import type { InputHTMLAttributes } from "react";
import { useSignals } from "@preact/signals-react/runtime";
type SignalInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange"
> & {
	value: Signal<string>;
};

export function SignalInput({ value, ...props }: SignalInputProps) {
	useSignals();
	console.log("SignalInput render", Date.now());

	return (
		<input
			{...props}
			value={String(value.value)}
			onChange={(e) => {
				value.value = e.target.value;
			}}
		/>
	);
}
