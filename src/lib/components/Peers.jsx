import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as appPropTypes from './appPropTypes';
import { Appear } from './transitions';
import Peer from './Peer';

const isEmpty = obj => Object.keys(obj).length === 0;

const Peers = ({ peers, activeSpeakerId, dataConsumers }) =>
{
	let chatConsumers = Object.values(dataConsumers).filter(({ label }) => label === "chat");
	console.log('myProps', peers);

	return (
		<div data-component='Peers'>
			{
				peers.map((peer) =>
				{
					if (peer.consumers.length < 1) return null;

					return (
						<Appear key={peer.id} duration={1000}>
							<div
								className={classnames('peer-container', {
									'active-speaker' : peer.id === activeSpeakerId
								})}
							>
								<Peer id={peer.id} />
							</div>
						</Appear>
					);
				})
			}
		</div>
	);
};

Peers.propTypes =
{
	peers           : PropTypes.arrayOf(appPropTypes.Peer).isRequired,
	activeSpeakerId : PropTypes.string,
	dataConsumers	: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>
{
	const {peers,room,dataConsumers} = state;
	const peersArray = Object.values(peers);

	return {
		peers           : peersArray,
		activeSpeakerId : room.activeSpeakerId,
		dataConsumers,
	};
};

const PeersContainer = connect(
	mapStateToProps,
	null,
	null,
	{
		areStatesEqual : (next, prev) =>
		{
			return (
				prev.peers === next.peers &&
				prev.room.activeSpeakerId === next.room.activeSpeakerId
			);
		}
	}
)(Peers);

export default PeersContainer;
