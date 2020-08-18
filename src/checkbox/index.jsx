import Reacr from "react";

export default function Checkbox({ checked, onChange, label }) {
	return (
		<div className="checkbox">
			<div className="border">
				<div className="indicator" />
			</div>
			<div className="label">{label}</div>
		</div>
	);
}