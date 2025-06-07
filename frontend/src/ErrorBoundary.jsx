import { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props){ 
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: error};
	}
	componentDidCatch(error, errorInfo) {
		console.error("Error caught by error boundaries: ",error, errorInfo);
	}
	render() {
		if (this.state.hasError){
			return <h2>Algo deu errado.</h2>
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
