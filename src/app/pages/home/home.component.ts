//import API from '@/app/theme/shared/service/client-api.service';

import {
  SweetAlertService,
  AlertIcon
} from '../../shared/service/sweet-alert.service'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import moment from 'moment'
import { FilterSelect } from '../../shared/service/filter.service'
import { HomeService } from './service/home-service'

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  homes: any[] = []

  filterSelect: FilterSelect[] = []
  selectedFilter: FilterSelect | undefined
  first: number = 0
  rows: number = 99999
  totalRecords: number = 0
  loading: boolean = true
  filterName: string = ''
  listTotal: any = []

  //companySession: any = JSON.parse(localStorage.getItem(AUTH_COMPANY) as string)

  noDataHome = 'N/A'

  constructor(
    private readonly router: Router,
    private readonly sweetAlertService: SweetAlertService,
    private readonly homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.loadList()
    this.loading = false
  }

  async confirmForRemove(homeId: string): Promise<any> {
    this.sweetAlertService
      .confirmAlert({
        title: 'Deseja remover esse nota?',
        text: 'Ao remover esse nota, todo o acesso associado a ele serão removidos!',
        icon: AlertIcon.WARNING,
        confirmText: 'A nota foi removido com sucesso!',
        cancellText: 'Os dados da nota não foram modificados!'
      })
      .then(async (willDelete) => {
        if (willDelete.dismiss) {
          Swal.fire('', 'Os dados da nota não foram modificados!', 'error')
        } else {
          try {
            //await API.delete(`homes/${homeId}`);
            await Swal.fire('', 'A nota foi removido com sucesso!', 'success')
            location.reload()
          } catch (e) {
            Swal.fire('', 'Os dados da nota não foram modificados!', 'error')
            console.error(e)
          }
        }
      })
  }

  async openRemove(id: string) {
    await this.confirmForRemove(id)
  }

  async previous() {
    if (this.first - this.rows < 0) return
    this.first = this.first - this.rows
    await this.loadList()
  }

  async next() {
    if (this.first + this.rows >= this.totalRecords) return
    this.first = this.first + this.rows
    await this.loadList()
  }

  maxListLength() {
    if (this.first <= this.totalRecords - this.rows) {
      return this.first + this.rows
    } else {
      return this.totalRecords
    }
  }

  isFirst(): boolean {
    return this.first === 0
  }

  isLast(): boolean {
    return this.first + this.rows >= this.totalRecords
  }

  async loadList() {
    const response = await this.homeService.list()
    this.homes = response.data
    this.listTotal = this.homes
    this.totalRecords = response.count
  }

  convertDate(date: any) {
    return date ? moment(date).format('DD/MM/YYYY') : ''
  }

  filterHomes() {
    this.homes = []
    if (
      this.filterName !== undefined &&
      this.filterName != null &&
      this.filterName != ''
    ) {
      for (const model of this.listTotal) {
        let resultSenderSocialName = false
        let resultSenderBusinesName = false
        let resultRecipientSocialName = false
        let resultRecipientBusinesName = false
        let senderSocialName: string = model.sourceCompany.socialName
        if (senderSocialName == null) {
          senderSocialName = ''
        }
        const senderSocialNameLowerCase = senderSocialName.toLowerCase()
        resultSenderSocialName = senderSocialNameLowerCase.includes(
          this.filterName.toLowerCase()
        )

        let senderBusinesName: string = model.sourceCompany.businessName
        if (senderBusinesName == null) {
          senderBusinesName = ''
        }
        const senderBussnessNameLowerCase = senderBusinesName.toLowerCase()
        resultSenderBusinesName = senderBussnessNameLowerCase.includes(
          this.filterName.toLowerCase()
        )

        let recipientSocialName: string = model.destinationPerson.socialName
        if (recipientSocialName == null) {
          recipientSocialName = ''
        }
        const recipientSocialNameLowerCase = recipientSocialName.toLowerCase()
        resultRecipientSocialName = recipientSocialNameLowerCase.includes(
          this.filterName.toLowerCase()
        )

        let recipientBusinesName: string = model.destinationPerson.businessName
        if (recipientBusinesName == null) {
          recipientBusinesName = ''
        }
        const recipientBussnessNameLowerCase =
          recipientBusinesName.toLowerCase()
        resultRecipientBusinesName = recipientBussnessNameLowerCase.includes(
          this.filterName.toLowerCase()
        )

        if (resultSenderSocialName) {
          this.homes.push(model)
        } else if (resultSenderBusinesName) {
          this.homes.push(model)
        } else if (resultRecipientSocialName) {
          this.homes.push(model)
        } else if (resultRecipientBusinesName) {
          this.homes.push(model)
        }
        this.first = 0
      }
    } else {
      this.homes = this.listTotal
    }
  }

  pageChange(event: any) {
    this.first = event.first
    this.rows = event.rows
  }
}
