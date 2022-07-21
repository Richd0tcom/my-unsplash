import React,{useState} from "react";
import axios from 'axios'


//you can also use modals to help with event delegation and z-index


interface newImageprops {
	open: Boolean;
	onClose: VoidFunction,
	
}

const NewImage = ({ open, onClose, }: newImageprops) => {
	const [label, setLabel] = useState('');
	const [photoUrl, setPhotoUrl] = useState('');

	async function addImage( ){
		const url = 'https://my-unsplash-ts.herokuapp.com/api/v1/images'
		const details = {
			label: label,
			imageURL: photoUrl
		}

		const res = await axios.post(url , details);

		if (res){
			console.log(res)
			onClose
		}
	}
	if (!open) return null;
	return (
		<>
      <div className="fixed top-0 bottom-0 left-0 right-0 over z-[1000000]"></div>
			<section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000000] w-screen flex justify-center">
				<form onSubmit={addImage} className="w-[90%] md:w-[70%] lg:max-w-[620px]  pt-3 pb-3 px-4 lg:pt-6 lg:px-8 rounded-xl lg:pb-6 shadow bg-white">
					<h3 className="lg:text-2xl font-medium leading-8">Add a new photo</h3>
					<div className="mt-5">
						<label>
							<h5 className="text-md lg:text-sm font-medium leading-[14px]">
								Label
							</h5>
						</label>
						<input
							type="text"
							name=""
							id=""
							className="p-2 lg:p-[1.1rem] w-full mt-2 rounded-xl border outline-2 outline-sky-300 "
							onInput={(e)=>setLabel((e.target as HTMLInputElement).value)}
						/>
					</div>
					<div className="mt-4">
						<label>
							<h5 className="text-md lg:text-sm font-medium leading-[14px]">
								Photo URL
							</h5>
						</label>
						<input
							type="url"
							name=""
							id=""
							placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
							className="p-2 lg:p-[1.1rem] w-full mt-2 rounded-xl border outline-2 outline-sky-300 "
							onInput={(e)=>setPhotoUrl((e.target as HTMLInputElement).value)}
						/>
					</div>
					<div className="pt-4 lg:pt-6">
						<div className="flex justify-end gap-x-3">
							<button
								className="px-4 lg:px-5 py-2 lg:py-3 lg:px-6 lg:py-4 text-base font-medium leading-5 rounded-lg md:rounded-xl border"
								onClick={onClose}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="px-4 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 font-bold text-base leading-5 rounded-lg md:rounded-xl bg-[#3DB46D] text-white"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default NewImage;
