import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard6 from "@/components/shared/cards/TeamCard6";

const Team = () => {

    const getTeamMembers = [
	{
		"id": 1,
		"name": "Savanah Nguyen",
		"desig": "Manager",
		"img": "https://theskepper.com/000_Skepper_test/real/emp1.png",
		"imgLarge": "https://theskepper.com/000_Skepper_test/real/emp1.png"
	},
	{
		"id": 2,
		"name": "Esther Howard",
		"desig": "Co. Founder",
		"img": "https://theskepper.com/000_Skepper_test/real/emp1.png",
		"imgLarge": "https://theskepper.com/000_Skepper_test/real/emp1.png"
	},
	{
		"id": 3,
		"name": "Kristin Watson",
		"desig": "Sr. Manager",
		"img": "https://theskepper.com/000_Skepper_test/real/emp1.png",
		"imgLarge": "https://theskepper.com/000_Skepper_test/real/emp1.png"
	},
	{
		"id": 4,
		"name": "Guy Hawkins",
		"desig": "Sr. Marketer",
		"img": "https://theskepper.com/000_Skepper_test/real/emp1.png",
		"imgLarge": "https://theskepper.com/000_Skepper_test/real/emp1.png"
	},
	{
		"id": 5,
		"name": "Darlene Robert",
		"desig": "Sr. Dsigner",
		"img": "https://theskepper.com/000_Skepper_test/real/emp1.png",
		"imgLarge": "https://theskepper.com/000_Skepper_test/real/emp1.png"
	},
	{
		"id": 6,
		"name": "Ronald Richards",
		"desig": "Sr. Marketer",
		"img": "https://theskepper.com/000_Skepper_test/real/emp1.png",
		"imgLarge": "https://theskepper.com/000_Skepper_test/real/emp1.png"
	}
]




	return (
		<section className="h9-team-section section-space">
			<div className="container">
					        <h3 className="font48">Top Management</h3>
				<div className="row team_row">

					{getTeamMembers?.length > 0
						? getTeamMembers.map((teamMember, idx) => (
								<div
									key={idx}
									className={`col-xl-4 col-md-6 col-sm-6`}
								>

									{/* <div
									key={idx}
									className={`col-xl-4 col-md-6 col-sm-6 order-${
										idx + 2
									} order-xl-${idx === 0 ? 12 : idx + 1}`}
								> */}

									<TeamCard6 idx={idx} teamMember={teamMember} />
								</div>
						  ))
						: ""}

					{/* <div className="col-xl-3 col-md-6 col-sm-6 order-1 order-xl-4">
						<div className="sec-heading style-2 ">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								[ MEET OUR TEAMS ]
							</span>
							<h2 className="sec-title text-anim">Expert team members</h2>
							<div className="desc wow fadeInUp" data-wow-delay="0.4s">
								In today's dynamic business environment, the key to success
								strategics..
							</div>
							<div
								className="d-none d-sm-inline-flex wow fadeInUp"
								data-wow-delay="0.5s"
							>
								<ButtonPrimary
									text={"More members"}
									url={"/team"}
									className={"more_team"}
								/>
							</div>
						</div>
					</div> */}
				</div>
				<div className="row d-sm-none">
					<div className="col text-center">
						<ButtonPrimary
							text={"More members"}
							url={"/team"}
							className={"more_team"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
