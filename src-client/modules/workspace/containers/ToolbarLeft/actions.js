/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { bindActionCreators } from 'redux';
import { success, failed, timeout, close} from 'modules/app/containers/AppMessage/actions';
import {
    reloadPage,
    setEditModeOn,
    setLivePreviewModeOn,
    saveModel,
    exportModel
} from 'modules/workspace/containers/DeskPage/actions';
import {
    toggleLibraryPanel,
    togglePageListPanel,
    toggleQuickOptions,
    togglePageTreeview
} from 'modules/workspace/containers/Desk/actions';
import { signOut } from 'modules/app/containers/AppContainer/actions'
import { showModal } from 'modules/app/containers/SignInModal/actions';
import { showModal as proxyShowModal } from 'modules/app/containers/ProxySetupModal/actions';

export const saveProject = () => (dispatch, getState) => {
    dispatch(saveModel());
    dispatch(success('Project has been saved successfully.'));
};

export const containerActions = (dispatch) => bindActionCreators({
    reloadPage,
    setEditModeOn,
    setLivePreviewModeOn,
    saveProject,
    exportModel,
    toggleLibraryPanel,
    togglePageListPanel,
    toggleQuickOptions,
    togglePageTreeview,
    showModal,
    signOut,
    proxyShowModal,
}, dispatch);