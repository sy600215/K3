const pool = require("../database");

class Capability {
	static async rodsFromGodInsert(gameId, gameTeam, selectedPositionId) {
		//TODO: this could be 1 query if efficient and do something with UNIQUE or INSERT IGNORE or REPLACE
		//keeping it simple for now to ensure it works
		let queryString = "SELECT * FROM rodsFromGod WHERE gameId = ? AND teamId = ? AND positionId = ?";
		const inserts = [gameId, gameTeam, selectedPositionId];
		let [results] = await pool.query(queryString, inserts);

		//prevent duplicate entries if possible
		if (results.length !== 0) {
			return false;
		}

		queryString = "INSERT INTO rodsFromGod (gameId, teamId, positionId) VALUES (?, ?, ?)";
		await pool.query(queryString, inserts);
		return true;
	}

	static async getRodsFromGod(gameId, gameTeam) {
		const queryString = "SELECT * FROM rodsFromGod WHERE gameId = ? AND teamId = ?";
		const inserts = [gameId, gameTeam];
		const [results] = await pool.query(queryString, inserts);

		let listOfPositions = [];
		for (let x = 0; x < results.length; x++) {
			listOfPositions.push(results[x].positionId);
		}

		return listOfPositions;
	}

	static async useRodsFromGod(gameId) {
		//get all the rods from god
		//delete pieces on those positions
		//let the user know which positions got hit

		let queryString = "SELECT * FROM rodsFromGod WHERE gameId = ?";
		let inserts = [gameId];
		const [results] = await pool.query(queryString, inserts);

		//need the positions anyway to give back to the clients for updating
		let fullListOfPositions = [];
		for (let x = 0; x < results.length; x++) {
			fullListOfPositions.push(results[x].positionId);
		}

		//now delete pieces with this position
		queryString = "DELETE FROM pieces WHERE pieceGameId = ? AND piecePositionId in (?)";
		inserts = [gameId, fullListOfPositions];
		await pool.query(queryString, inserts);

		//delete the rodsFromGod in the db
		queryString = "DELETE FROM rodsFromGod WHERE gameId = ?";
		inserts = [gameId];
		await pool.query(queryString, inserts);

		return fullListOfPositions;
	}
}

module.exports = Capability;
