import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const {backendUrl, aToken} = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try{

    if (!docImg) {
      toast.error("Please upload doctor image");
      return;
    }

    if (!name) {
      toast.error("Please enter doctor name");
      return;
    }

    if (!email) {
      toast.error("Please enter email");
      return;
    }

    if (!password) {
      toast.error("Please enter password");
      return;
    }

    if (!fees) {
      toast.error("Please enter fees");
      return;
    }

    if (!degree) {
      toast.error("Please enter education");
      return;
    }

    if (!address1) {
      toast.error("Please enter address 1");
      return;
    }

    if (!address2) {
      toast.error("Please enter address 2");
      return;
    }

    if (!about) {
      toast.error("Please write about doctor");
      return;
    }

    toast.success("Doctor Added Successfully");

    const formData = new FormData()
    formData.append('image',docImg)
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('experience',experience)
    formData.append('fees',Number(fees))
    formData.append('about',about)
    formData.append('speciality',speciality)
    formData.append('degree',degree)
    formData.append('address',JSON.stringify({line1:address1,line2:address2}))

    // console log formData
    formData.forEach((value, key) =>{
      console.log(`${key} : ${value}`)
    })

    const {data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers:{aToken}})

    if(data.success){
      toast.success(data.message)
      setDocImg(false)
      setName('')
      setEmail('')
      setPassword('')
      setAddress1('')
      setAddress2('')
      setDegree('')
      setAbout('')
      setFees('')

    } else{
      toast.error(data.message)
    }
    
  } catch(error){
    toast.error(error.message)
    console.log(error)
  }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-26 h-26 bg-gray-100 rounded-full cursor-pointer object-cover overflow-hidden"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <div className="relative w-full">
                 <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border rounded px-3 py-2 w-full"
                  type="text"
                  placeholder="Name"
                />
                {name && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-1.5  font-bold">
                    ✓
                  </span>
                )}
              </div>
               
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <div className="w-full relative">
                <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2 w-full"
                type="email"
                placeholder="Your email"
              />
              {email && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-1.5  font-bold">
                    ✓
                  </span>
                )}
              </div>
              
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <div className="relative w-full">
                <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2 w-full"
                type="password"
                placeholder="Password"
              />
                {password.length > 8 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-1.5  font-bold">
                    ✓
                  </span>
                )}
              </div>
              
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Years</option>
                <option value="3 Year">3 Years</option>
                <option value="4 Year">4 Years</option>
                <option value="5 Year">5 Years</option>
                <option value="6 Year">6 Years</option>
                <option value="7 Year">7 Years</option>
                <option value="8 Year">8 Years</option>
                <option value="9 Year">9 Years</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <div className="relative w-full">
                <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2 w-full"
                type="number"
                placeholder="Your fees"
              />
                {fees && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-1.5  font-bold">
                    ✓
                  </span>
                )}
              </div>
              
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 lg:flex-1">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <div className="relative w-full">
                <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2 w-full"
                type="text"
                placeholder="Education"
              />
                {degree && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-1.5  font-bold">
                    ✓
                  </span>
                )}
              </div>
              
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <div className="relative w-full">
                <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2 w-full"
                type="text"
                placeholder="Address 1"
              />
                {address1 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-1.5  font-bold">
                    ✓
                  </span>
                )}
              </div>
              
              <div className="relative w-full">
                 <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2 w-full"
                type="text"
                placeholder="Address 2"
              />
                {address2 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full px-1.5  font-bold">
                    ✓
                  </span>
                )}
              </div>
             
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2">About me</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full border rounded px-3 py-2"
            placeholder="write about yourself"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-full mt-4 border py-3 px-10 text-white"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
