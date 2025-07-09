const API_BASE = "http://localhost:5000/api";

export async function fetchDoctorsBySpeciality(speciality, startTime, endTime) {
  try {
    const res = await fetch(
      `${API_BASE}/doctors/specialities/${speciality}?startTime=${startTime}&endTime=${endTime}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
}