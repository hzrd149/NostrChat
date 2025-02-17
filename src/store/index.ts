import {atom} from 'jotai';
import {
    Channel,
    ChannelUpdate,
    EventDeletion,
    Profile,
    PublicMessage,
    DirectMessage,
    ChannelMessageHide,
    ChannelUserMute,
    MuteList,
    Message
} from 'types';
import {GLOBAL_CHAT} from 'const';

export * from 'store/ui';
export * from 'store/keys';
export * from 'store/raven';

export const ravenReadyAtom = atom<boolean>(false);
export const profilesAtom = atom<Profile[]>([]);
export const profileAtom = atom<Profile | null>(null);
export const channelsAtom = atom<Channel[]>([GLOBAL_CHAT]);
export const channelAtom = atom<Channel | null>(null);
export const channelUpdatesAtom = atom<ChannelUpdate[]>([]);
export const eventDeletionsAtom = atom<EventDeletion[]>([]);
export const publicMessagesAtom = atom<PublicMessage[]>([]);
export const directMessagesAtom = atom<DirectMessage[]>([]);
export const directContactsAtom = atom<{ pub: string, npub: string }[] | []>([]);
export const directMessageAtom = atom<string | null>(null);
export const channelMessageHidesAtom = atom<ChannelMessageHide[]>([]);
export const channelUserMutesAtom = atom<ChannelUserMute[]>([]);
export const muteListAtom = atom<MuteList>({pubkeys: [], encrypted: ''});
export const threadRootAtom = atom<Message | null>(null);
export const commonTsAtom = atom<number>(0);
export const backupWarnAtom = atom<boolean>(false);
