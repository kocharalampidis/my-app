import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Predictive_Maintenanace() {
	return (
		<>
			<div class='bg-black bg-opacity-75 md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64 rounded'>
				<span>img</span>
				<div class='my-2 w-full md:w-2/3  px-4 py-4 bg-white rounded-lg'>
					<div class='flex items-center'>
						<h2 class='text-xl text-gray-800 font-medium mr-auto'>
							Predictive_Maintenanace
						</h2>
					</div>
					<p class='text-sm text-gray-700 mt-4'>
						Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam
						reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit
						earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis
						numquam tempore commodi ipsa suscipit laboriosam, sit earum at
						sequi.
					</p>
					<div class='flex items-center justify-end mt-4 top-auto'>
						<button class=' bg-blue-600 text-gray-200 px-2 py-2 rounded-md'>
							<a
								class=''
								href='https://github.com/kocharalampidis/LBP'
								target='_blank'
								rel='noopener noreferrer'>
								<span>Follow it on Github </span>
								<FontAwesomeIcon icon={faExternalLinkAlt} />
							</a>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Predictive_Maintenanace;

{
	/*<div class='md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64'>
			<span>img</span>
			<div class='w-full md:w-2/3 px-4 py-4 bg-white rounded-lg'>
				<div class='flex items-center'>
					<h2 class='text-xl text-gray-800 font-medium mr-auto'>
						Your Travel Buddy
					</h2>
					<p class='text-gray-800 font-semibold tracking-tighter'>
						only
						<i class='text-gray-600 line-through'>60$</i>
						48$
					</p>
				</div>
				<p class='text-sm text-gray-700 mt-4'>
					Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam
					reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum
					at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam
					tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
				</p>
				<div class='flex items-center justify-end mt-4 top-auto'>
					<button class='bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline'>
						Delete
					</button>
					<button class=' bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2'>
						Edit
					</button>
					<button class=' bg-blue-600 text-gray-200 px-2 py-2 rounded-md '>
						Publish
					</button>
				</div>
			</div>
		</div> */
}