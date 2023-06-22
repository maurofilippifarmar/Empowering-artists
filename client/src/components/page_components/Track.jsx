import { Howl, Howler } from 'howler';
import { useState } from 'react';
import { BsPlay, BsPause, BsStop, BsPencil, BsTrash } from 'react-icons/bs';
import DeleteTrack from '../content_managment_system/DeleteTrack.jsx';
import PatchTrack from '../content_managment_system/PatchTrack.jsx';

const Track = ({ track }) => {
    const sourceAudio = track.trackFile;
    const [sound, setSound] = useState(null);
    const [active, setActive] = useState('track');
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1); // Volume state

    const playSound = () => {
        if (sound) {
            sound.stop();
        }

        if (Howler._howls.length > 0) {
            Howler.stop();
        }

        const newSound = new Howl({
            src: [sourceAudio],
            html5: true,
            format: ['mp3'],
            volume: volume, // Set the volume
            onplay: () => {
                setIsPlaying(true);
                setSound(newSound);
                requestAnimationFrame(updateTime);
            },
            onload: () => {
                setDuration(newSound.duration());
            },
            onend: () => {
                setIsPlaying(false);
                setSound(null);
                setCurrentTime(0);
            },
        });

        setSound(newSound);
        newSound.play();
    };

    const pauseSound = () => {
        if (sound) {
            sound.pause();
        }
    };

    const stopSound = () => {
        if (sound) {
            sound.stop();
            setSound(null);
        }
    };

    const updateTime = () => {
        if (sound) {
            setCurrentTime(sound.seek());
            requestAnimationFrame(updateTime);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const formattedTime = `${minutes}:${seconds
            .toString()
            .padStart(2, '0')}`;
        return formattedTime;
    };

    return (
        <div>
            {/* {isPlaying && (
                <div className="bg-gray-200 p-4 mb-4">
                    <h1 className="text-lg font-bold">
                        Now playing: {track?.trackName}
                    </h1>
                    <span>{formatTime(duration)}</span>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => {
                            const newVolume = parseFloat(e.target.value);
                            setVolume(newVolume);
                            if (sound) {
                                sound.volume(newVolume);
                            }
                        }}
                    />
                </div>
            )} */}

            <li key={track?._id} className=" ">
                {active === 'track' && (
                    <div className="flex justify-start space-x-2 ">
                        <div className="min-w-500 basis-3/4 ">
                            <h1 className="text-lg font-bold ">
                                {track?.trackName}
                            </h1>
                        </div>

                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded"
                            onClick={playSound}
                        >
                            <BsPlay />
                        </button>
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded"
                            onClick={pauseSound}
                        >
                            <BsPause />
                        </button>
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded"
                            onClick={stopSound}
                        >
                            <BsStop />
                        </button>

                        <button
                            className="py-1 px-4 bg-gray-500 text-black rounded"
                            onClick={() => setActive('edit-track')}
                        >
                            <BsPencil />
                        </button>
                        <button className="py- px-4 bg-red-500 text-white rounded">
                            <DeleteTrack track={track} />
                        </button>
                    </div>
                )}
                {active === 'edit-track' && (
                    <div>
                        <PatchTrack track={track} setActive={setActive} />
                    </div>
                )}
            </li>
        </div>
    );
};

export default Track;
