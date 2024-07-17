import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "./AdminDashboard.css";
import { ClipLoader } from "react-spinners";

const AdminDashboard = () => {
  const [studentsData, setStudentsData] = useState([])
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchStudents = async () =>{
      setLoading(true)
      var response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/students?page=${page}`)
      if(response && response.status === 200){
        var parsedResponse = await response.json()
        setStudentsData(parsedResponse)
        setLoading(false)
      }
    }
    fetchStudents()
  }, [page]);


  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <Sidebar name={"Admin 1234"} />
      </div>
      <div className="dashboard">
        <div className="table-container">
          <table className="routes-table">
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Semester</th>
                <th>Pick Up</th>
                <th>Bus Id</th>
              </tr>
            </thead>
            
            {loading?<tbody>
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                    <ClipLoader color="#5b9bd5" size={60}  aria-label="Loading Spinner"
        data-testid="loader" />
                  </td>
                </tr>
              </tbody>:<tbody>
              {studentsData?.students?.map((student) => (
                <tr key={student.student_id}>
                  <td>{student.student_id}</td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.semester}</td>
                  <td>9:30 am</td>
                  <td>{student.bus_id}</td>
                </tr>
              ))}
            </tbody>}
          </table>
          <div className="pagination">
            <button className="route-button" disabled={page === 1} onClick={()=>setPage((page)=>page-1)}>Previous</button>
            <span>Page {page}/{studentsData.totalPages}</span>
            <button className="route-button" disabled={page === studentsData.totalPages} onClick={()=>setPage((page)=>page+1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
