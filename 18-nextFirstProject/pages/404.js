import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router';

const Error = () => {

	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, [])
    return ( 
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<div></div>
				<h1>404</h1>
			</div>
			<h2>Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<Link href='/'>Home Page</Link>
		</div>
	</div>


     );
}
 
export default Error;