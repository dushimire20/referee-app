const DashboardHome = () => {

	const upcomingGames = [
		{
			date: '1/1/23',
			time: '7PM',
			teams: 'Team A VS Team B',
			venue: 'BK Arena, Kigali'
		},
		{
			date: '3/1/23',
			time: '6PM',
			teams: 'Team A VS Team B',
			venue: 'BK Arena, Kigali'
		},
		{
			date: '5/1/23',
			time: '5PM',
			teams: 'Team A VS Team B',
			venue: 'BK Arena, Kigali'
		},
		{
			date: '7/1/23',
			time: '4PM',
			teams: 'Team A VS Team B',
			venue: 'BK Arena, Kigali'
		}
	];

	return (
		<div className="p-8 flex-1">
			<h1 className="text-3xl font-bold">Hi, Eric ISHIMWE</h1>
			<p className="text-gray-500">Welcome back to your Referee dashboard</p>

			{/* Upcoming Games table */}
			<section className="mt-8">
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-semibold">Upcoming games</h2>
					<a href="#" className="text-red-500">Full schedule</a>
				</div>
				<div className="bg-white rounded-lg shadow-md p-4 mt-4">
					<table className="w-full">
						<thead>
							<tr className="text-left text-gray-500">
								<th>Date</th>
								<th>Time</th>
								<th>Teams</th>
								<th>Venue</th>
							</tr>
						</thead>
						<tbody>
							{upcomingGames.map((game, i) => (
								<tr key={i} className="">
									<td>{game.date}</td>
									<td>{game.time}</td>
									<td>{game.teams}</td>
									<td>{game.venue}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			{/* Notifications */}
			<section className="mt-8">
				<h2 className="text-xl font-semibold">Notifications</h2>
				<div className="bg-pink-50 p-4 mt-4 rounded-lg shadow-md flex justify-between items-center">
					<p className="text-red-500 font-bold">Urgent:</p>
					<span>You have been assigned a task!</span>
					<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View details</button>
				</div>
			</section>

			{/* Calendar */}
			<section className="mt-8">
				<h2 className="text-xl font-semibold">January Events</h2>
				<div className="flex justify-between items-center">
					<div className="grid grid-cols-7 gap-2">
						{[...Array(31)].map((_, i) => (
							<div
								key={i}
								className={`w-8 h-8 flex items-center justify-center rounded-full ${i === 0 ? 'bg-blue-500 text-white' : 'text-gray-500'
									}`}
							>
								{i + 1}
							</div>
						))}
					</div>
					<a href="#" className="text-red-500">See Calendar</a>
				</div>
			</section>
		</div>
	)
}

export default DashboardHome