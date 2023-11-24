import React from "react";

export function MainScrollWrapper(payload: {
	children: React.ReactNode;
	loader?: boolean;
	shadow?: boolean;
	color?: boolean;
	center?: boolean;
}) {
	return (
		<div
			className={`flex flex-col fixed items-center text-neutral-50 rounded-xl overflow-y-scroll top-20 bottom-4 left-0 right-0 m-auto px-2 pt-2 pb-2 z-0${
				payload.shadow ? " shadow-[0px_0px_2px_2px] shadow-lime-300" : ""
			}${payload.color ? " bg-gray-700" : ""}${
				payload.center ? " justify-center" : " justify-start"
			}`}
		>
			{payload.children ? payload.children : <></>}
		</div>
	);
}
