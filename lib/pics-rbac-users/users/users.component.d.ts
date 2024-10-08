import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProviderGroup, UserGroup } from '../@core/datamodel/userDataModel';
import { RBACINFO } from '../@core/urls/users-url.config';
import { UserOrgService } from '../@core/service/user-org.service';
import { AlertService } from '../@core/service/alert.service';
import { DataStoreService } from '../@core/service/data-store.service';
import { MultiSelect } from 'primeng/multiselect';
import * as i0 from "@angular/core";
export declare class UsersComponent implements OnInit {
    private userService;
    private fb;
    private alertService;
    private _storeservice;
    RBACORG: RBACINFO;
    PERMISSION: any;
    ms: MultiSelect;
    userList: UserGroup[];
    providerList: ProviderGroup[];
    filteredUserList: UserGroup[];
    selectedRoles: string[];
    selectedTeams: string[];
    userRoles: any[];
    userTeams: any[];
    formSubmit: boolean;
    disabled: boolean;
    userForm: FormGroup;
    userSearch$: Subject<string>;
    deletedId: string;
    userid: any;
    checked: boolean;
    sendCredentials: boolean;
    providerAccount: boolean;
    uploadedFile: any;
    urlPath: any;
    imageData: any;
    attachType: any;
    imageInformation: string;
    currentDate: Date;
    policyGroupList: any;
    orgInfo: any;
    orgId: any;
    firstname: string;
    httpService: any;
    lastname: string;
    middlename: string;
    rolePolicyGroups: any;
    userPolicyGroups: any;
    validationErrors: {
        [key: string]: string;
    };
    inputValidationMethod: any;
    policyGroupsLength: any;
    enableButton: boolean;
    originalPolicyGroupList: any[];
    previousSelectedPolicyGroups: any[];
    filterText: string;
    filteredItems: any[];
    constructor(userService: UserOrgService, fb: FormBuilder, alertService: AlertService, _storeservice: DataStoreService);
    ngOnInit(): void;
    isAnyFormControlWithValue(): boolean;
    initializeForm(): void;
    get formValidate(): {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    onInput(event: Event, fieldtype: any, label: any, required: boolean): void;
    getUserList(_key?: string): void;
    getRolesList(): void;
    clearSearch(event: Event): void;
    getPolicyGroupList(_managementGroupId?: number): void;
    addUser(): void;
    userWithOutId(userData: any): void;
    userWithID(userData: any): void;
    mapUserToRole(userId: any, roleId: any): void;
    onClickAddUser(): void;
    cancel(changeFlag: any): void;
    searchUser(event: Event): void;
    getUserInfo(user: any): void;
    removeValue(e: any, item: any): void;
    getRolePolicyGroups(roleId: any): void;
    delete(event: Event, id: any): void;
    deleteUser(): void;
    cancelUser(): void;
    activateUser(): void;
    selectProvider(selected: any): void;
    addProviderUser(providerId: any, userid: any): void;
    handleFileInput(fileValue: any): void;
    onClickRemoveProfile(): void;
    removeThumbnail(): void;
    validateImage(file: any): boolean;
    stopPropagation(event: Event): void;
    selectPolicyGroup(event: any): void;
    updateSelections(roleId: any, currentSelections: any): void;
    onPageNameInput(event: KeyboardEvent, name: string): void;
    onFilterPolicyGroup(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UsersComponent, "users", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; }, {}, never, never>;
}
