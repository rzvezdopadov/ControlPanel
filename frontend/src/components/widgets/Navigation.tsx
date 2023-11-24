import { useMemo } from "react";
import { ILink } from "../interfaces/inavigation";
import { store } from "../../store/store";
import { ACCTYPE } from "../../../../global/roles";
import { ButtonNavigationLink } from "../utils/Buttons/Buttons";
import { Logout } from "../pages/Logout";

export const linkNoAuth: ILink[] = [
	{ to: "/", imgSrc: "", title: "Главная" },
	{ to: "/login", imgSrc: "", title: "Войти" },
];
export const linkAuthUser: ILink[] = [
	{ to: "/", imgSrc: "", title: "Главная" },
	{ to: "/logout", imgSrc: "", title: "Выход" },
];

export function Navigation(payload: { naviKey: string }) {
	const { jwt, userMyProfile } = store.getState();

	const NavigationMemo = useMemo(() => {
		return jwt ? (
			userMyProfile?.userid !== "" ? (
				userMyProfile.acctype === ACCTYPE.user ? (
					<>
						{linkAuthUser.map((link) => {
							return (
								<ButtonNavigationLink
									link={link}
									naviKey={payload.naviKey}
									key={"linkAuthUser" + payload.naviKey + link.to}
								/>
							);
						})}
					</>
				) : (
					<Logout></Logout>
				)
			) : (
				<></>
			)
		) : (
			<>
				{linkNoAuth.map((link) => {
					return (
						<ButtonNavigationLink
							link={link}
							naviKey={payload.naviKey}
							key={"linkNoAuth" + payload.naviKey + link.to}
						/>
					);
				})}
			</>
		);
	}, [jwt, userMyProfile.acctype, userMyProfile.userid]);

	return NavigationMemo;
}