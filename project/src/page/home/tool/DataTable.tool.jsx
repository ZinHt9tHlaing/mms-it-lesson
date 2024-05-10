import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import SweetAlert2 from "react-sweetalert2";
import Swal from 'sweetalert2'

const DataTableTool = ({ data }) => {
  const [swalProps, setSwalProps] = useState({});

  const handleSweet2Close = () => {
    setSwalProps(
      Swal.fire({
        title: "Are you sure!",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      })
    );
  };
  return (
    <div>
      <Table className="mt-5">
        <TableHeader>
          <TableRow className=" bg-basic text-white hover:bg-basic text-lg">
            <TableHead className=" rounded-s-lg">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-end">Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className=" rounded-r-lg">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((i) => (
            <TableRow key={i.id} className=" font-semibold bg-[#fcfcfd]">
              <TableCell>{i.id}</TableCell>
              <TableCell>{i.name}</TableCell>
              <TableCell className=" text-gray-400">{i.email}</TableCell>
              <TableCell className="text-end text-gray-400">
                {i.phone}
              </TableCell>
              <TableCell className=" text-gray-400">{i.address}</TableCell>
              <TableCell className="text-xl space-x-5">
                <button className=" hover:scale-110 active:scale-95 duration-200">
                  <FaEdit />
                </button>
                <button
                  onClick={handleSweet2Close}
                  className=" hover:scale-110 active:scale-95 duration-200"
                >
                  <FaRegTrashAlt className=" text-danger" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default DataTableTool;
